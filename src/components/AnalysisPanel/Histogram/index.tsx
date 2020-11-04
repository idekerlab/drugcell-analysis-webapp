import { useParams } from 'react-router-dom'

import React, { useEffect } from 'react'

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

import * as d3 from 'd3';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      height: '100%',
      display: 'flex'
    }
  }),
)

const Histogram = () => {
  
  const drawChart = (height : number, width: number) => {
    d3.select("#histogram")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid black")
        .append("text")
        .attr("fill", "green")
        .attr("x", 50)
        .attr("y", 50)
        .text("Hello D3")
}

  useEffect(() => {
    drawChart(400, 600);
  });

  const classes = useStyles();

  return (
    <div id="histogram">
            </div>
  )
}

export default Histogram