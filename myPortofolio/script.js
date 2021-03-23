let buttonBackToTop = document.getElementsByClassName("back-To- Top");



const getToTop = () => {
    document.body.scrollTop = 0;
};

const scrollFunction = () => {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        header.classList.add('bg');
        buttonBackToTop.style.visibility = 'visible';
    } else {
        header.classList.remove('bg');
        buttonBackToTop.style.visibility = 'hidden';
    }

    buttonBackToTop.addEventListener("click", getToTop);
}