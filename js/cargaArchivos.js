fetch('header.html')
    .then(response => response.text())
    .then(data => {
        // Crear un contenedor temporal para manipular el HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;

        // Extraer solo el contenido con el id "header"
        const headerFragment = tempDiv.querySelector('#header');
        document.getElementById('header').innerHTML = headerFragment ? headerFragment.outerHTML : '';

    });


/*fetch('footer.html')

    const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;

        // Extraer solo el contenido con el id "header"
        const headerFragment = tempDiv.querySelector('#header');
        document.getElementById('header').innerHTML = headerFragment ? headerFragment.outerHTML : '';
    
    
*/