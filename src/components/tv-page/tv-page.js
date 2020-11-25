import React, { useContext, useEffect, useState } from 'react';
import TvCard from '../tv-card';
import './tv-page.css';
import CustomScrollBar from '../scroll-bar';
import { ServiceContext } from '../../services';

const TvPage = () => {
  const { getTvProgramm } = useContext(ServiceContext);
  const [tvProgramm, setTvProgamm] = useState([]);
  useEffect(() => {
    let programData = getTvProgramm();
    setTvProgamm(programData);
  });
  return (
    <div className="tv-page column">
      <CustomScrollBar>
        {tvProgramm.map(({ id, title, src, schedule }) => {
          return (
            <TvCard
              key={id + 'tvs'}
              title={title}
              src={src}
              schedule={schedule}
            />
          );
        })}
      </CustomScrollBar>
    </div>
  );
};

export default TvPage;
