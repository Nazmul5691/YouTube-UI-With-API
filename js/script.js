// get category
const handleCategory = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    // console.log(data)
    

    // set category in tabContainer
    const tabContainer = document.getElementById('tab-container')
    data.data.forEach(category => {
        const div = document.createElement("div")
        div.innerHTML = `
        <a onclick="handleLoadVideos('${category.category_id}')" class="tab bg-[#E5E6E6] text-black rounded-md mr-2">${category.category}</a> 
        `
        tabContainer.appendChild(div)
    });
}


const handleLoadVideos = async(categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
    // console.log(data)

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    data.data?.forEach((videos) =>{
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="card rounded-md card-compact mb-5 h-[320px] w-[295px] bg-base-100 ">
                <figure><img class="h-[180px] w-full " src=${videos.thumbnail} alt="thumbnail" /></figure>
                <div class="card-body">
                  <div class="flex">
                    <div class="">
                        <img class="rounded-full h-10 w-10" src=${videos.authors[0]?.profile_picture} alt="profile-picture">
                    </div>
                    <div class="ml-2">
                        <h1 class="text-xl font-bold">${videos.title}</h1>
                        <p>${videos?.authors[0]?.profile_name}</p> 
                        <p>${videos?.others?.views}</p>  
                    </div>
                  </div>
                </div>
              </div>
        `
        cardContainer.appendChild(div);

    });
}

handleLoadVideos("1000");

handleCategory();

