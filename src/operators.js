import { pipe } from "rxjs";
import { map, mapTo, switchMap, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { someDependency } from "./dependency";

export const sampleOperator = () => {
    return pipe(
        someDependency(),
        mapTo(1)
    );
}

export const sampleAjaxLoad = () => {
    return pipe(
        mapTo("http://www.google.com"),
        switchMap(url => ajax(url)),
        catchError(err => {
            throw 'error in source. Details: ' + err;
        })
    );
}
