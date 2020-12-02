import { of, from, pipe } from "rxjs";
import { tap, take, map, mapTo } from "rxjs/operators";
import { ObserverSpy } from "@hirez_io/observer-spy";

// We're testing this stuff
import { sampleOperator, sampleAjaxLoad } from "../../src/operators";

//#region Mocks

// mocking a functional dependency
import { ajax } from "rxjs/ajax";
jest.mock("rxjs/ajax");

ajax.mockImplementation((url) => {
    return of({ foo: "bar" });
});

// mocking an observable dependency
import { someDependency } from "../../src/dependency";
jest.mock("../../src/dependency");

someDependency.mockImplementation(cfg => {
    return pipe(
        tap(val => console.log("mocked!", val)),
    );
});

//#endregion

describe("sample operators", () => {

    test("sampleOperator", async () => {

        const src$ = of(true, false, true);
        const result$ = src$.pipe(
            sampleOperator(),
        );

        const spy = new ObserverSpy();
        result$.subscribe(spy);
        await spy.onComplete();

        const allAreOne = spy.getValues().every(val => val === 1);
        expect(allAreOne).toBe(true);
    })

    test("mock someDependency", async () => {

        const src$ = of(true, false, true);
        const result$ = src$.pipe(
            sampleOperator(),
        );

        const spy = new ObserverSpy();
        result$.subscribe(spy);
        await spy.onComplete();

        const allAreOne = spy.getValues().every(val => val === 1);
        expect(allAreOne).toBe(true);
    })

    test("sampleAjaxLoad", async () => {

        const src$ = of(true, false, true);
        const result$ = src$.pipe(
            sampleAjaxLoad()
        );

        const spy = new ObserverSpy();
        result$.subscribe(spy);
        await spy.onComplete();

        expect(spy.receivedNext()).toBe(true);
        expect(spy.receivedError()).toBe(false);
        expect(spy.receivedComplete()).toBe(true);

        console.log(spy.getValues());

        const allAreOne = spy.getValues().every(val => val?.foo == 'bar');
        expect(allAreOne).toBe(true);
    })

})
