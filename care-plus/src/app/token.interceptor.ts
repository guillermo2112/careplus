import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('token');
  const cloneRequest = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });

  return next(cloneRequest);
};
