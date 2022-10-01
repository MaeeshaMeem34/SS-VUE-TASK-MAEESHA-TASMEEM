<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="6">
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5" v-text="item.name"></v-card-title>

              <v-card-subtitle v-text="item.age"></v-card-subtitle>

              <v-card-actions>
                <v-btn
                  class="ml-2 mt-5"
                  justify="space-around"
                  outlined
                  rounded
                  small
                  to="/staffs/view/:id"
                >
                  View More
                </v-btn>
                <v-btn
                  class="ml-2 mt-5"
                  justify="space-around"
                  outlined
                  rounded
                  small
                  to="/staffs/edit/:id"
                >
                  <v-icon left> mdi-pencil </v-icon>
                  Edit
                </v-btn>
                <v-btn
                  class="ml-2 mt-5"
                  justify="space-around"
                  outlined
                  rounded
                  small
                >
                  <v-icon left> mdi-delete </v-icon>
                  Delete
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "InfoCard",
  data: () => ({
    items: [
      {
        name: "meem",
        age: "20",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpclgdZQ3ZHBh6xTt4wlROP30NE_GY7MdVw&usqp=CAU",
      },
      {
        name: "riyad",
        age: "25",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpclgdZQ3ZHBh6xTt4wlROP30NE_GY7MdVw&usqp=CAU",
      },
    ],
  }),
};
</script>
