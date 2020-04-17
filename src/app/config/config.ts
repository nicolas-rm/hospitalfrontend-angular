import Swal from 'sweetalert2';

export const URL_SERVICIOS = 'http://localhost:3000';


export const SWAL_CREATE = (leyenda: string, parametro?: any) => {
  let timerInterval;
  let texto: string;
  if (parametro) {
    texto = `${leyenda} ${parametro}.`;
  } else {
    texto = `${leyenda}.`;
  }

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    // title: 'Debe De Aceptar Los Terminos y Condiciones.',
    text: texto,
    toast: true,
    timer: 2200,
    timerProgressBar: true,
    width: 380,
    onBeforeOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        const content = Swal.getContent();
        if (content) {
          const b: any = content.querySelector('b');
          if (b) {
            b.textContent = Swal.getTimerLeft();
          }
        }
      }, 100);
    },

    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
    onClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer');
    }
  });
};

export const SWAL_ERROR = (leyenda: string, time: number) => {
  let timerInterval;
  // if (parametro) {
  //   texto = `${leyenda} ${parametro}.`;
  // } else {
  //   texto = `${leyenda}.`;
  // }

  Swal.fire({
    position: 'top-end',
    icon: 'error',
    // title: 'Debe De Aceptar Los Terminos y Condiciones.',
    text: leyenda,
    toast: true,
    timer: time,
    timerProgressBar: true,
    width: 380,
    onBeforeOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        const content = Swal.getContent();
        if (content) {
          const b: any = content.querySelector('b');
          if (b) {
            b.textContent = Swal.getTimerLeft();
          }
        }
      }, 100);
    },

    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
    onClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer');
    }
  });
};

export const SWAL_UPDATE = (leyenda: string, parametro?: any) => {
  let timerInterval;
  let texto: string;
  if (parametro) {
    texto = `${leyenda} ${parametro}.`;
  } else {
    texto = `${leyenda}.`;
  }

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    // title: 'Debe De Aceptar Los Terminos y Condiciones.',
    text: texto,
    toast: true,
    timer: 2200,
    timerProgressBar: true,
    width: 380,
    onBeforeOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        const content = Swal.getContent();
        if (content) {
          const b: any = content.querySelector('b');
          if (b) {
            b.textContent = Swal.getTimerLeft();
          }
        }
      }, 100);
    },

    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
    onClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer');
    }
  });
};

interface Usuario {
  nombre: string;
  email: string;
  password: string;
  img?: string;
  role?: string;
  google?: boolean;
  id_usuario?: number;
}

