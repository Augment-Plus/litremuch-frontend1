<template>
  <div>
    <pre>
        {{ formData }}
    </pre>
    <div>
      <p>Car Type</p>
      <v-select v-model="formData.carType" :options="carTypes"></v-select>
    </div>
    <div>
      <p>Car Engines</p>
      <v-select v-model="formData.carEngine" :options="carEngines"></v-select>
    </div>
    <div>
      <p>Origin</p>
      <v-select :options="carTypes"></v-select>
    </div>
    <div>
      <p>Destination</p>
      <v-select :options="carTypes"></v-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        carType: null,
        carEngine: null,
        origin: null,
        destination: null,
      },
      carTypes: ["Benz", "Toyota", "Lexus", "Volkswagen", "Honda"],
      carEngines: [],
      engines: {
        benz: ["benz1", "benz2", "benz3", "benz4", "benz5"],
        toyota: ["toyota1", "toyota2", "toyota3", "toyota4", "toyota5"],
        lexus: ["lexus1", "lexus2", "lexus3", "lexus4", "lexus5"],
        volkswagen: ["volks1", "volks2", "volks3", "volks4", "volks5"],
        honda: ["honda1", "honda2", "honda3", "honda4", "honda5"],
      },
    };
  },
  watch: {
    "formData.carType"(newValue) {
      this.formData.carEngine = null;
      let carType = newValue.toLowerCase();
      this.carEngines = this.engines[carType];
    },
  },
};
</script>
