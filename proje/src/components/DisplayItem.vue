<template>
	<!-- link icin bir row bir 10 md boş ve sonra 2 col-md-2 link -->
	<div>
		<div class="row">
			<div class="col-md-10"></div>
			<div class="col-md-2">
				<router-link :to="{name: 'createItem'}" class="btn btn-primary">
				Create Item
				</router-link>
			</div>
		</div>
	


	<!-- table. table table-hover icinde thead ve tbody v-for item in items her item icinde de item _id item name price ve link to edit ve delete ve button delete -->

	<table class="table table-hover">
		<thead>
		<tr>
			<td>id</td>
			<td>item name</td>
			<td>item price</td>
			<td>actions</td>
			</tr>
		</thead>
		<tbody>
			
			<tr v-for="_item in items">
				<td>{{_item._id}}</td>
				<td>{{_item.name}}</td>
				<td>{{_item.price}}</td>
				<td>
					<router-link :to="{
						name:'EditItem',
						params: {id: _item._id}
					}"
					class="btn btn-primary"
					>
					Edit
					</router-link>
				</td>
				<td>
					<button class="btn btn-danger"
					v-on:click="deleteItem(_item._id)"
					>
						delete
					</button>
				</td>
			</tr>
		</tbody>
	</table>
	<!-- create item -->
	<div class="">
		  <div>
    <h1>Create An Item</h1>
    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
        </div>
        
       
          <div class="col-md-4">
            <div class="form-group">
              <label>Item Price:</label>
              <input type="text" class="form-control col-md-6" v-model="item.price" />
            </div>
          </div>
    
        <div class="form-group">
          <button class="btn btn-primary">Add Item</button>
        </div>
        </div>
    </form>
  </div>
		
	</div>
</div>



</template>

<script>
	
	export default {
		/*data*/
		data() {
			return{
				items: [],
				item:{}
			}
		},
		/*created*/
		created: function(){
			this.fetchItems()
		},
		/*methods*/

		methods: {
			fetchItems() {
				let uri = 'http://localhost:2000/items';
				this.axios.get(uri)
					.then((response)=>{
						this.items = response.data;
					});
			},
			deleteItem(id) {
				let uri = 'http://localhost:2000/items/delete/' + id;
				
				this.axios.get(uri)
				.then(()=>{
					this.fetchItems();
				});

			},
			addItem(){
        let uri = 'http://localhost:2000/items/add';
        this.axios.post(uri, this.item).then((response) => {
          this.$router.push({name: 'DisplayItem'});
          this.fetchItems();
        })
    }
		}
	}


</script>