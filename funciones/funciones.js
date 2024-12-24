let subt = document.getElementById('subt');
if(subt){
    subt.textContent = 'Subtítulo cambiado desde funciones.js';
}

let plataforma = document.getElementById('plataforma');
if(plataforma){
    plataforma.addEventListener('click', () => {
        window.location.href = './recursos/paginas/plataforma.html';
    });
}

let volver = document.getElementById('volver');
if(volver){
    volver.addEventListener('click', () => {
        window.history.back();
    });
}

        // Variables globales
        const openModalBtns = document.querySelectorAll('.desc'); // Todos los botones de descripción
        const closeModalBtn = document.getElementById('closeModal'); // Botón para cerrar el modal
        const modal = document.getElementById('modal'); // Modal
        const overlay = document.getElementById('overlay'); // Fondo oscuro
        const modalTitle = document.getElementById('modalTitle'); // Título dinámico
        const modalDescription = document.getElementById('modalDescription'); // Descripción dinámica

        // Abrir el modal y cambiar su contenido dinámicamente
        openModalBtns.forEach(button => {
            button.addEventListener('click', () => {
                const productTitle = button.getAttribute('data-title'); // Toma el título del producto
                const productDescription = button.getAttribute('data-description'); // Toma la descripción del producto
                
                // Cambia el contenido del modal
                modalTitle.textContent = productTitle;
                modalDescription.textContent = productDescription;

                // Muestra el modal y la superposición
                modal.classList.add('open');
                overlay.classList.add('open');
            });
        });

        // Cerrar el modal
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('open');
            overlay.classList.remove('open');
        });

        // Cerrar modal si se hace clic en la superposición
        overlay.addEventListener('click', () => {
            modal.classList.remove('open');
            overlay.classList.remove('open');
        });

        // ubicar modal
        document.querySelectorAll(".desc").forEach((button) => {
            button.addEventListener("click", (event) => {
                const modal = document.querySelector(".modal");
                
                // Mostrar el modal
                modal.style.display = "block";
        
                // Asegurarte de que el modal esté visible
                modal.scrollIntoView({ behavior: "smooth", block: "center" });
            });
        });
        
        // Cerrar el modal al hacer clic fuera de él o en un botón cerrar
        document.querySelector(".modal").addEventListener("click", (event) => {
            if (event.target.classList.contains("close")) {
                event.currentTarget.style.display = "none";
            }
        });
        