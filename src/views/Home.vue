<template>
    <div class="debugging-example">
        Debugging Example {{ counter }}
        <button @click="toggle">Click me</button>
    </div>
</template>


<script>

import { interval, NEVER, Subject } from "rxjs";
import { map, switchMap, startWith, scan, shareReplay } from "rxjs/operators";
import { tag } from "rxjs-spy/operators/tag";


const clicks$ = new Subject();

const toggle$ = clicks$.pipe(
    startWith(1),
    scan((acc) => !acc, true),
    tag('toggle'),
);

const ticks$ = interval(100).pipe(
    shareReplay(1),
);

const counter$ = toggle$.pipe(
    switchMap(isToggled => isToggled ? ticks$ : NEVER),
    tag('counter'),
);


export default {

    // data() {
    //     return {
    //         counter: 0
    //     }
    // },

    // created() {
    //     this.sub = counter$.subscribe(val => this.counter = val);
    // },

    // beforeDestroy() {
    //     this.sub.unsubscribe();
    // },

    // All vue-rx does is wrap up the act of subscribing to observables. It
    // saves a little bit of typing, the act of simplifying the api comes with
    // tradeoffs like, what if you want an error or complete handler?

    subscriptions() {
        return {
            counter: counter$
        }
    },

    methods: {
        toggle() {
            clicks$.next(1)
        }
    }
}

</script>