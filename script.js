const recipes = [
    {
        title: "Vegan Quinoa Salad",
        description: "A fresh and colorful salad with quinoa, veggies, and a zesty lemon dressing.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
        categories: ["vegan", "gluten-free"]
    },
{
        title: "Keto Avocado Chicken",
        description: "Creamy avocado paired with grilled chicken for a low-carb delight.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
        categories: ["keto"]
    },
    {
        title: "Gluten-Free Pancakes",
        description: "Fluffy pancakes made with gluten-free flour, perfect for breakfast.",
        image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600",
        categories: ["gluten-free", "vegetarian"]
    },
    {
        title: "Vegetarian Stir-Fry",
        description: "A vibrant mix of vegetables in a savory soy sauce.",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
        categories: ["vegetarian", "vegan"]
    },
    {
        title: "Keto Cauliflower Pizza",
        description: "A delicious low-carb pizza with a cauliflower crust.",
        image: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?w=600",
        categories: ["keto", "gluten-free"]
    },
    {
        title: "Vegan Chickpea Curry",
        description: "A creamy coconut curry packed with chickpeas and spices.",
        image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?w=600",
        categories: ["vegan", "gluten-free"]
    },
    {
        title: "Gluten-Free Chocolate Cookies",
        description: "Rich and chewy cookies made with gluten-free flour.",
        image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?w=600",
        categories: ["gluten-free", "vegetarian"]
    },
    {
        title: "Keto Zucchini Noodles",
        description: "Low-carb zucchini noodles tossed in a creamy pesto sauce.",
        image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?w=600",
        categories: ["keto", "gluten-free", "vegetarian"]
    },
    {
        title: "Vegetarian Stuffed Peppers",
        description: "Bell peppers stuffed with rice, beans, and cheese.",
        image: "https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?w=600",
        categories: ["vegetarian", "gluten-free"]
    },
    {
        title: "Vegan Smoothie Bowl",
        description: "A refreshing bowl with blended fruits, topped with granola and seeds.",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600",
        categories: ["vegan", "gluten-free"]
    },
    {
        title: "Keto Salmon with Asparagus",
        description: "Grilled salmon with roasted asparagus, perfect for a low-carb diet.",
        image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=600",
        categories: ["keto", "gluten-free"]
    },
    {
        title: "Gluten-Free Veggie Pizza",
        description: "A gluten-free crust topped with fresh vegetables and mozzarella.",
        image: "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?w=600",
        categories: ["gluten-free", "vegetarian"]
    },
    {
        title: "Vegan Lentil Soup",
        description: "A hearty soup with lentils, carrots, and warming spices.",
        image: "https://images.pexels.com/photos/5946806/pexels-photo-5946806.jpeg?w=600",
        categories: ["vegan", "gluten-free"]
    }
];

function displayRecipes(filteredRecipes) {
    const container = document.getElementById('recipeContainer');
    container.innerHTML = '';
    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" onerror="this.src='https://via.placeholder.com/250?text=Image+Not+Found';">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
        `;
        container.appendChild(card);
    });
}

function filterRecipes(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    const activeButton = Array.from(buttons).find(btn => btn.textContent.toLowerCase() === category);
    if (activeButton) activeButton.classList.add('active');

    if (category === 'all') {
        displayRecipes(recipes);
    } else {
        const filtered = recipes.filter(recipe => recipe.categories.includes(category));
        displayRecipes(filtered);
    }
}

// Initial display of all recipes
displayRecipes(recipes);