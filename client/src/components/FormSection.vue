<template>
  <div>
    <p>
      Distance: {{ distance }} <br />
      Duration:{{ duration }}<br />
      Litres: {{ litres }}
    </p>
    <div>
      <q-select
        v-model="formData.carType"
        :options="carTypes"
        label="Select Car Type"
      />
    </div>
    <div>
      <q-select
        v-model="formData.carEngine"
        :options="carEngines"
        label="Select Car Engine"
      />
    </div>
    <div>
      <q-input v-model="formData.origin" label="Origin" />
    </div>
    <div>
      <q-input v-model="formData.destination" label="Destination" />
    </div>
    <div>
      <q-btn
        color="primary"
        @click="submit()"
        text-color="black"
        label="Submit"
      />
    </div>
    <pre>
        {{ formData }}
    </pre>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      distance: null,
      duration: null,
      litres: null,
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
  methods: {
    async submit() {
      let url = "https://litremuch1-dot-augment-plus.ey.r.appspot.com/";
      console.log(url);
      console.log(this.formData);
      let res = await axios({
        url,
        method: "GET",
        params: this.formData,
      });

      console.log(res.data);
      this.distance = res.data.distance;
      this.duration = res.data.duration;
      this.litres = res.data.litres;
    },
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
