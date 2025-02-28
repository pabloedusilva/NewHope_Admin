// Enable the add button when all fields are filled
function setupModal(modalIndex) {
    const frontImage = document.getElementById(`frontImage${modalIndex}`);
    const backImage = document.getElementById(`backImage${modalIndex}`);
    const price = document.getElementById(`price${modalIndex}`);
    const newPrice = document.getElementById(`newPrice${modalIndex}`);
    const size = document.getElementById(`size${modalIndex}`);
    const productName = document.getElementById(`productName${modalIndex}`);
    const productDescription = document.getElementById(`productDescription${modalIndex}`);
    const addButton = document.getElementById(`addButton${modalIndex}`);
    const frontPreview = document.getElementById(`frontPreview${modalIndex}`);
    const backPreview = document.getElementById(`backPreview${modalIndex}`);
    const removeFront = document.getElementById(`removeFront${modalIndex}`);
    const removeBack = document.getElementById(`removeBack${modalIndex}`);

    function toggleAddButton() {
        addButton.disabled = !(
            frontImage.files.length > 0 &&
            backImage.files.length > 0 &&
            (price.value.trim() !== '' || newPrice.value.trim() !== '') &&
            size.value.trim() !== '' &&
            productName.value.trim() !== '' &&
            productDescription.value.trim() !== ''
        );
    }

    frontImage.addEventListener('change', function () {
        const file = frontImage.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                frontPreview.src = e.target.result;
                frontPreview.style.display = 'block';
                removeFront.style.display = 'inline';
            }
            reader.readAsDataURL(file);
        }
        toggleAddButton();
    });

    backImage.addEventListener('change', function () {
        const file = backImage.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                backPreview.src = e.target.result;
                backPreview.style.display = 'block';
                removeBack.style.display = 'inline';
            }
            reader.readAsDataURL(file);
        }
        toggleAddButton();
    });

    removeFront.addEventListener('click', function () {
        frontImage.value = '';
        frontPreview.style.display = 'none';
        removeFront.style.display = 'none';
        toggleAddButton();
    });

    removeBack.addEventListener('click', function () {
        backImage.value = '';
        backPreview.style.display = 'none';
        removeBack.style.display = 'none';
        toggleAddButton();
    });

    price.addEventListener('change', function () {
        if (price.value === 'add') {
            newPrice.style.display = 'block';
        } else {
            newPrice.style.display = 'none';
        }
        toggleAddButton();
    });

    newPrice.addEventListener('input', toggleAddButton);
    size.addEventListener('change', toggleAddButton);
    productName.addEventListener('input', toggleAddButton);
    productDescription.addEventListener('input', toggleAddButton);
}

// Set up each modal
setupModal(1);
setupModal(2);
setupModal(3);
