let html = "";
let fetchData = () => {
    html = "";
    axios.get("http://localhost:3000/blogs")
        .then((res) => {
            res.data.forEach(element => {
                html += `
                <div
                class="w-[40%] h-[250px] bg-white rounded-md shadow-md relative font-[estedad] flex flex-col justify-center">
                <img src="${element.img}"
                    class="w-[40%] h-full object-cover absolute left-0" alt="">
                <div class="flex flex-col justify-center pb-6 absolute w-[48%] pr-5 right-0">
                    <div class="flex gap-3 items-center justify-start">
                        <span class="font-medium text-[12px]">${element.date}</span>
                        <div class="px-2 py-1 rounded-full bg-[#FBE8D9] text-[12px] text-gray-800">
                            <span class="overflow-hidden text-ellipsis py-[3px] px-[10px]">${element.detail}</span>
                        </div>
                        <div class="px-2 py-1 text-[12px] text-gray-800 bg-[#FBE8D9] rounded-full">
                            <span>${element.detail_2}</span>
                        </div>
                    </div>
                    <br>
                    <h3
                        class="text-[20px] font-medium text-[#330072] mb-4 text-ellipsis overflow-hidden whitespace-nowrap">
                       ${element.title}</h3>

                    <div class="text-[12px] font-normal leading-[185%] overflow-hidden text-ellipsis whitespace-nowrap">
${element.body}</div>
                </div>
            </div>`;
            });
            document.querySelector("div#card").innerHTML = html;
        })
        .catch((err) => console.log("Error fetching data", err));
}
document.addEventListener("DOMContentLoaded", fetchData);



