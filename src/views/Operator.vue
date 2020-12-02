<template>
    <div>
        <h1>An operator just a configurable function which returns another
        function which accepts an observable and returns another observable</h1>

        <pre>

            const operator$ = config => src$ => {
                return src$.pipe(
                    doThings()
                )
            };

        </pre>

    </div>
</template>