// var sample = 945;
// var wfreq_sample = buildGauge(940);
// console.log(wfreq_sample);

// buildGauge(sample);



function buildGauge(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);

    // 2. Create a variable that holds the first sample in the metadata array.
    var sampleMetadata = metadataArray[0];

    // 3. Create a variable that holds the washing frequency.
    var wfreq = sampleMetadata.wfreq;

    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      type: "indicator",
      mode: "gauge+number",
      value: wfreq, 
      title: {text: "Belly Button Washing Frequency<br>Scrubs per Week", font: {size: 19}},
      gauge: {
        axis: {range: [null, 10], tickwidth: 2, tickcolor: "lightgray"},
        bar: { color: "#000" },
        bgcolor: "white",
        borderwidth: 1,
        bordercolor: "lightgray",
        steps: [
          {range: [0, 2], color: "rgb(242, 42, 42, .7)"},
          {range: [2, 4], color: "rgb(242, 142, 42, .7)"},
          {range: [4, 6], color: "rgb(242, 242, 42, .7)"},
          {range: [6, 8], color: "rgb(42, 242, 42, .7)"},
          {range: [8, 10], color: "rgb(24, 204, 24, .7)"}
        ],
      }
    }];

    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {
      width: 500,
      height: 400,
      margin: { t: 25, r: 25, l: 25, b: 35 },
      paper_bgcolor: "#fff",
      font: { color: "darkblue", family: "Open Sans", size: 14 }
    };
    
    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot('gauge', gaugeData, gaugeLayout);
  });
  
}



