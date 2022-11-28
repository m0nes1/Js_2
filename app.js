let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },


    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM' .toLocaleLowerCase().trim(),
        count: 0
    },
    {
        course: 'PROGRAMMING' .toLocaleLowerCase().trim(),
        count: 0
    },
    {
        course: '     3DSMAX' .toLocaleLowerCase().trim(),
        count: 0
    },
    {
        course: ' DIZAYN'.toLocaleLowerCase().trim(),
        count: 0
    },
    {       
        course: '   BACKEND'.toLocaleLowerCase().trim(),
        count: 0
    
        
    },
]


for(let item of categories) {
   item.arr = []
}

 console.log(categories);

 for(let item of arr){
     for(let itemTwo of categories) {
         if (itemTwo.course.trim().toLocaleLowerCase() === item.info.faculity.trim()
         .toLocaleLowerCase()) {
         itemTwo.count++
         }
     }
 }

for(let item of arr) {
    for(let itemTwoo of categories) {
        if (itemTwoo.course.trim().toLocaleLowerCase() !==  item.name.trim()
        )
        {
            itemTwoo.arr.push(name)
        }
    }
}

console.log(categories);

// for (let item of arr) {
//     if(typeof(categories[item.faculity]) === 'SMM') {
//         categories[item.faculity]++
//     }
// }

// for(let item of arr) {
//     if(item.faculity === 'Backend') {
//         categories.count++
//         categories.course('Backend').push(item)
//     }
// }

// console.log(categories);
    
// for (let item of arr) {
//      if(typeof(categories[item.faculity])=== 'Backend') {
//         categories.count[item.faculity]++
//      } else {
//         course.push(item.faculity)
//      }
// }

// console.log(categories);