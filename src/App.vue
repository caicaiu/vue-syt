<template>
  <div class="container">
    <HospitalTop/>
    <div class="content">
      <router-view/>
    </div>
    <HospitalBottom/>
  </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 70px;
    min-height: 100vh;
    width: 1200px;
  }

  .footer {
    width: 100%;
    height: 70px;
    background: skyblue;
  }
}
</style>
