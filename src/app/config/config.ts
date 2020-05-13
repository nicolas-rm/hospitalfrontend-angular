import Swal from 'sweetalert2';

export const URL_SERVICIOS = 'http://localhost:3000';


export const SWAL_CREATE = (leyenda: string, parametro?: any) => {

  let texto: string;
  if (parametro) {
    texto = `${leyenda} ${parametro}.`;
  } else {
    texto = `${leyenda}.`;
  }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  Toast.fire({
    icon: 'error',
    title: texto
  });
};

export const SWAL_ERROR = (leyenda: string, time: number) => {
  const Toast = Swal.mixin({
    toast: true,
    // width: 250,
    position: 'top-end',
    showConfirmButton: false,
    timer: time,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  Toast.fire({
    icon: 'error',
    title: leyenda
  });
};

export const SWAL_UPDATE = (leyenda: string, parametro?: any) => {
  let texto: string;
  if (parametro) {
    texto = `${leyenda} ${parametro}.`;
  } else {
    texto = `${leyenda}.`;
  }


  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  Toast.fire({
    icon: 'success',
    title: texto
  });
};

export const SWAL_DELETE = (tipo: string, parametro?: string) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  Toast.fire({
    icon: 'success',
    title: `${tipo}!`,
    text: parametro + ' Eliminado Correctamente.'
  });
};

export const SWAL_CONFIRMATION = (preposicion: string, tipo: string, parametro: string) => {
  // let confirmacion: boolean = false;

  return Swal.fire({
    title: '¿Estas Seguro?',
    text: `Desea Eliminar ${preposicion} ${tipo} ${parametro}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, Eliminar'
  }).then((result) => {
    if (result.value) {
      return true;
    } else {
      return false;
    }
  });

  // return confirmacion;
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

