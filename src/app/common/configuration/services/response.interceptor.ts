import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataResponse } from '@common/models';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (
          request.method === 'DELETE' &&
          event instanceof HttpResponse &&
          event.status === 204
        ) {
          const body = DataResponse.SUCCESS;

          event = event.clone({ body });
        }

        return event;
      })
    );
  }
}
