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


    const noData = document.getElementById('no-data');
    if (data.data.length === 0) {
        noData.classList.remove('hidden');
    } else {
        noData.classList.add('hidden');
    }


    data.data?.forEach((videos) =>{
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="card rounded-md card-compact mb-5 h-[320px] w-[295px] bg-base-100 ">
                <figure><img class="h-[180px] w-full " src=${videos.thumbnail} alt="thumbnail" /></figure>
                
                <p class="pl-2">${videos?.others?.posted_date ? '<div class="bg-black w-40 h-6 absolute bottom-[150px] left-32 rounded-md text-white"></div>' : ''}</p>

                
                <div class="card-body">
                  <div class="flex">
                    <div class="">
                        <img class="rounded-full h-10 w-10" src=${videos.authors[0]?.profile_picture} alt="profile-picture">
                    </div>
                    <div class="ml-2">
                        <h1 class="text-xl font-bold">${videos.title}</h1>
                        <div class="flex">
                            <div>
                                <p>${videos?.authors[0]?.profile_name}</p>
                            </div>
                            <div class="ml-3">
                                <p>${videos.authors[0]?.verified ? '<img src="image/verified.svg" alt="Verified">' : ''}</p>
                            </div>
                        </div>
                        <p>${videos?.others?.views}</p>  
                        
                    </div>
                  </div>
                </div>
              </div>
        `

        const convertTime = videos.others.posted_date;
        const time =(convertTime)=>{
            
            
            const minutes = Math.floor(convertTime / 60);
            const remainingSeconds = convertTime % 60;

            const timeAndSec = (`${minutes} minutes and ${remainingSeconds} seconds ago`);
            return timeAndSec;
        }
        
        time();
        

        cardContainer.appendChild(div);
        

    });
    
    
}


handleLoadVideos("1000");

handleCategory();

// const convertTime = videos.others.posted_date;
//         const time =(convertTime)=>{
            
            
//             const minutes = Math.floor(convertTime / 60);
//             const remainingSeconds = convertTime % 60;

//             const timeAndSec = (`${minutes} minutes and ${remainingSeconds} seconds ago`);
//             return timeAndSec;
//         }


{/* <p class="pl-2">${videos?.others?.posted_date ? `<div class="bg-black w-40 h-6 absolute bottom-36 left-32 rounded-md text-white">${time(videos?.others?.posted_date)}</div>` : ''}</p>  */}
//  <p>${videos?.others?.posted_date ? time(videos?.others?.posted_date) : ''}</p> 







// const sortView = () =>{
//     data.data.sort((a,b) => b.others.views - a.others.views)
//     handleLoadVideos("1000")

// }
// const sortByViewBtn = document.getElementById("sort-view-btn")
// sortByViewBtn.addEventListener("click",function(){
//     sortView();
// })


// const totalSeconds = 16278;
// const minutes = Math.floor(totalSeconds / 60);
// const remainingSeconds = totalSeconds % 60;

// console.log(`${minutes} minutes and ${remainingSeconds} seconds ago`);





