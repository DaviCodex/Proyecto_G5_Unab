google.charts.load('current', {packages: ['bar']});
google.charts.setOnLoadCallback(dibujarGraficoBarras);
function dibujarGraficoBarras()
    {
        var data = new google.visualization.arrayToDataTable([
            ['Usuarios', 'Altura en Cm'],
            ["Usuario 1", 170],
            ["Ususario 2", 180],
            ["Usuario 3", 160]
          ]);
        var options = {
        title: 'Datos de altura de ususarios de la pagina ',
        width: 600,
        legend: { position: 'none' },
        chart: { title: 'Datos de altura de usuarios de la pagina',
                    subtitle: 'Datos en centrimetros' },
        bars: 'horizontal', // Required for Material Bar Charts.
        axes: {
            x: {
            0: { side: 'top', label: 'Altura en centimetros'} // Top x-axis.
            }
        },
        bar: { groupWidth: "90%" }
        };
  
          var chart = new google.charts.Bar(document.getElementById('ContenedorGraficoAltura'));
          chart.draw(data, options);
    }