import React, { useState, useCallback, useEffect, useRef } from 'react';
import './scrollbar.css';

const scrollMinHeight = 20;

const CustomScrollBar = ({ children, className, ...restProps }) => {
  const [hovering, setHovering] = useState(false);
  const [scrollBoxHeight, setScrollBoxHeight] = useState(scrollMinHeight);
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setDragging] = useState(false);
  const scrollHostRef = useRef();

  const handleMouseOver = useCallback(() => {
    !hovering && setHovering(true);
  }, [hovering]);

  const handleMouseOut = useCallback(() => {
    !!hovering && setHovering(false);
  }, [hovering]);

  const handleDocumentMouseUp = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        setDragging(false);
      }
    },
    [isDragging]
  );

  const handleDocumentMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        const scrollHostElement = scrollHostRef.current;
        const { scrollHeight, offsetHeight } = scrollHostElement;

        let deltaY = e.clientY - lastScrollThumbPosition;
        let percentage = deltaY * (scrollHeight / offsetHeight);

        setScrollThumbPosition(e.clientY);
        setScrollBoxTop(
          Math.min(
            Math.max(0, scrollBoxTop + deltaY),
            offsetHeight - scrollBoxHeight
          )
        );
        scrollHostElement.scrollTop = Math.min(
          scrollHostElement.scrollTop + percentage,
          scrollHeight - offsetHeight
        );
      }
    },
    [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]
  );

  const handleScrollThumbMouseDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollThumbPosition(e.clientY);
    setDragging(true);
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollHostRef) {
      return;
    }
    const scrollHostElement = scrollHostRef.current;
    const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;

    let newTop =
      (parseInt(scrollTop, 10) / parseInt(scrollHeight, 10)) * offsetHeight;
    newTop = Math.min(newTop, offsetHeight - scrollBoxHeight);
    setScrollBoxTop(newTop);
  }, [scrollBoxHeight]);

  useEffect(() => {
    const scrollHostElement = scrollHostRef.current;
    const { clientHeight, scrollHeight } = scrollHostElement;
    const scrollThumbPercentage = clientHeight / scrollHeight;
    const scrollThumbHeight = Math.max(
      scrollThumbPercentage * clientHeight,
      scrollMinHeight
    );
    setScrollBoxHeight(scrollThumbHeight);
    scrollHostElement.addEventListener('scroll', handleScroll, true);
    return function cleanup() {
      scrollHostElement.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  useEffect(() => {
    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
    document.addEventListener('mouseleave', handleDocumentMouseUp);
    return function cleanup() {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
      document.removeEventListener('mouseleave', handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);

  return (
    <div
      className={'scrollhost-container'}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        ref={scrollHostRef}
        className={`scrollhost ${className}`}
        {...restProps}
      >
        {children}
      </div>
      <div className={'scroll-bar'}>
        <div
          className={'scroll-thumb'}
          style={{ height: scrollBoxHeight, top: scrollBoxTop }}
          onMouseDown={handleScrollThumbMouseDown}
        />
      </div>
    </div>
  );
};

export default CustomScrollBar;
