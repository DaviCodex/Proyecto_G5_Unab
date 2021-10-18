google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Usuario", "Peso en Kg", { role: "style" } ],
        ["Usuario 1", 65.5, "#78ffd6"],
        ["Usuario 2", 75.9, "#00F260"],
        ["Usuario 3", 70, "#0575E6"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Peso en Kg",
        width: 400,
        height: 500,
        bar: {groupWidth: "70%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("ContenedorGraficoPeso"));
      chart.draw(view, options);
    }