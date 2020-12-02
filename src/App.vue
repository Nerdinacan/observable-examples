<template>
    <div id="app">
        <nav>
            <ul>
                <li><router-link to="/">Debugging an observable in chrome</router-link></li>
                <li><router-link to="/vueobs">Vue's Observability Scheme</router-link></li>
                <!-- <li><router-link to="/historynoobs">Hypothetical History</router-link></li> -->
                <!-- <li><router-link to="/about">About</router-link></li> -->
                <li><router-link to="/resources">Resources</router-link></li>
            </ul>
        </nav>
        <router-view />
    </div>
</template>
