import React, {useState, useContext} from 'react';
import {useLocation} from 'react-router-dom'
import AnalysisPanel from '../AnalysisPanel'
import GeneEntryPanel from '../GeneEntryPanel'
import { useParams } from 'react-router-dom'
import useDrugs from '../../hooks/useDrugs'
import { Typography } from '@material-ui/core';
import AppContext from '../../context/AppContext';
import { CircularProgress } from '@material-ui/core';

import './style.css';

interface FindDrugParamTypes {
  resultid: string
}

const FindDrug = (props : any) => {
  
  const params = useParams<FindDrugParamTypes>();

  const { resultid } = params;

  const location = useLocation();

  const { cdapsServer } = useContext(AppContext)

  const drugResponse = useDrugs(cdapsServer, resultid);

  if (drugResponse.isError) {

  }

  if (drugResponse.isLoading) {
    return (
      <div className='spinner'>
        <CircularProgress color="secondary" />
      </div>
    )
  }

  if (!drugResponse.data) {
    return (
      <Typography>Waiting
      </Typography>
    )
  }

  /*
  useEffect(()=>{
    if (location.search.startsWith('?')) {
      const genes = location.search.substring(location.search.indexOf('=') + 1, location.search.length);
      console.log('useEffect genes detected: ', genes)
      setGenes(decodeURIComponent(genes));
    }
  }, [location])
*/

  return (
    <div className='container'>
      <div className='left-components'>
        <GeneEntryPanel genes={drugResponse.data.inputGenes} {...props} />
      </div>
      <div className='center-components'>
        <AnalysisPanel data={drugResponse.data} {...props}/>
      </div>
    </div>
  );
}

export default FindDrug;