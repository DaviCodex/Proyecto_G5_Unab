function dataTableImc()
    {
        let tablaDatos= new google.visualization.DataTable();
        //columnas de la tabla 
        tablaDatos.addColumn('string','Usuario');
        tablaDatos.addColumn('number','Altura');
        //filas de la tabla
        tablaDatos.addRows(
        [
        ['Usuario 1',20],
        ['Usuario 2',40],
        ['Usuario 3',30],
        ]);
        return tablaDatos;
    }
    function dibujarGraficoTorta()
    {
        //cargar datos 
        let data=dataTableImc();
        //llamar constructor del grafico 
        let grafico = new google.visualization.PieChart(document.getElementById('ContenedorGrafico'))
        var opciones=
        {
        'title':'datos indice de masa corporal',
        'width':400,
        'height:':300
        };
        //pasar data al grafico
        grafico.draw(data,opciones);
    }