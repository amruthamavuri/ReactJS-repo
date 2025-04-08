const products=[
    {title:'cabbage', IsFruit:false, id :1},
    {title:'Garlic', IsFruit:false, id:2},
    {title:'Apple', IsFruit:true, id:3}
];

function ShoppingList()
{
    const listitems = products.map(products=>
        <li
        key={products.id}
        style={{
            color:products.IsFruit? 'magenta' : 'darkgreen'
        }}
        >
        {products.title}
        </li>
    );


return(
    <ul>{listitems}</ul>
);
}

export default ShoppingList;