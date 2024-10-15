$(document).ready(function() {
    // Filtro de categorías
    $('.category-filter').on('click', function(e) {
        e.preventDefault();
        var category = $(this).data('category');
        // Oculta todos los juegos y muestra solo los de la categoría seleccionada
        $('.col-md-4').hide();
        $('.col-md-4[data-category="' + category + '"]').show();
    });

    // Función de búsqueda por barra
    function searchGames() {
        var value = $('#searchBar').val().toLowerCase();
        $('#gameList .col-md-4').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    }

    // Llamada a la función de búsqueda al escribir
    $('#searchBar').on('keyup', searchGames);

    // Llamada a la función de búsqueda al hacer clic en el botón
    $('#searchButton').on('click', searchGames);

    // Muestra el modal con los detalles del juego
    $('.details-btn').on('click', function() {
        var title = $(this).data('title');
        var description = $(this).data('description');

        // Actualiza el contenido del modal
        $('#modalGameTitle').text(title);
        $('#modalGameDescription').text(description);

        // Muestra el modal
        $('#gameModal').modal('show');
    });
});
