import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// postsDirectory là đường dẫn tới thư mục chứa các file bài viết. 
//Đường dẫn này được xác định bằng cách kết hợp đường dẫn hiện tại của dự án (từ process.cwd()) với tên thư mục 'posts'.
const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostData(){
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostData = fileNames.map((fileName) =>{
        // get id(namefile) from fileName
        const id = fileName.replace(/\.md$/,'');
        
        // read markdown as string
        const fullPath = path.join(postsDirectory,fileName);

        // add utf8 encoding
        const fileContent = fs.readFileSync(fullPath,'utf8');

        // use matter to parse the post

        const matterResult = matter(fileContent);

        return{
            id:id,
            ...matterResult.data
        }

    })

    // sort data by date

    return allPostData.sort((a,b)=>{
        if(a.date < b.date){
            return 1
        }else{
            return -1
        }
    })
}


export  function getAllPostsIds(){
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName=>{
        return{
            params:{
                id:fileName.replace(/\.md$/,''),
            }
        }
    })
}

// export function getAllPostIds() {
//     const fileNames = fs.readdirSync(postsDirectory)
//     return fileNames.map(fileName => {
//       return {
//         params: {
//           id: fileName.replace(/\.md$/, '')
//         }
//       }
//     })
//   }
export async function getPostData(id){
    const fullPath = path.join(postsDirectory,`${id}.md`);

    const fileContents = fs.readFileSync(fullPath,'utf8');

    const matterResult = matter(fileContents);

    const processContent = await remark()
    .use(html)
    .process(matterResult.content)

    const contentHtml = processContent.toString();
    return{
        id,
        contentHtml,
        ...matterResult.data,
    }
}