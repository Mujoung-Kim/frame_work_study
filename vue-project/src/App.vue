<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="about">About</router-link> |
    <router-link to="DataBinding">DataBinding</router-link> |
    <router-link to="DataBindingHtml">HtmlBinding</router-link> |
    <router-link to="DataBindingText">BindingInputText</router-link> |
    <router-link to="DataBindingNumber">BindingInputNumber</router-link> |
    <router-link to="DataBindingTextarea">BindingInputTextarea</router-link> |
    <router-link to="DataBindingSelect">BindingSelect</router-link> |
    <router-link to="DataBindingCheckBox">BindingCheckBox</router-link> |
    <router-link to="DataBindingCheckBox2">BindingCheckBox2</router-link> |
    <router-link to="DataBindingRadio">BindingRadio</router-link> |
    <router-link to="DataBindingImg">BindingImg</router-link> |
    <router-link to="DataBindingButton">BindingButton</router-link> |
    <router-link to="DataBindingClass">BindingClass</router-link> |
    <router-link to="DataBindingClass2">BindingClass2</router-link> |
    <router-link to="DataBindingStyle">BindingStyle</router-link> |
    <router-link to="DataBindingList">BindingList</router-link> |
    <router-link to="DataBindingList2">BindingList2</router-link> |
    <router-link to="DataBindingIf">BindingIf</router-link> |
    <router-link to="EventClick">EventClick</router-link> |
    <router-link to="EventChange">EventChange</router-link> |
    <router-link to="EventComputed">EventComputed</router-link> |
    <router-link to="EventWatch">EventWatch</router-link> |
    <router-link to="EventWatch2">EventWatch2</router-link> |
    <router-link to="test_event">TestEvent</router-link> |
    <router-link to="NestedComponent">PageTitle</router-link> |
    <router-link to="ParentComponent">ParentComponent</router-link> |
    <router-link to="ParentComponent2">ParentComponent2</router-link> |
    <router-link to="ParentComponent3">ParentComponent3</router-link> |
    <router-link to="ParentComponent4">ParentComponent4</router-link> |
    <router-link to="ParentComponent5">ParentComponent5</router-link> |
    <router-link to="SlotUseModalLayout">SlotUseModalLayout</router-link> |
    <router-link to="ProvideInject">ProvideInject</router-link> |
    <router-link to="TestComponents">TestComponent</router-link> |
    <router-link to="CalculatorView">Calculator</router-link> |
    <router-link to="CompositionApi">CompositionApi</router-link> |
    <router-link to="CompositionApi2">CompositionApi2</router-link> |
    <router-link to="CompositionApi3">CompositionApi3</router-link> |
    <router-link to="CompositionApi4">CompositionApi4</router-link> |
    <router-link to="CompositionApiProvide">CompositionApiProvide</router-link> |
    <router-link to="MixinsView">MixinsView</router-link> |
    <router-link to="CustomDirective">CustomDirective</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
