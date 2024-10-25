type LessonType = {
    title: string;
}
type ManType = {
    name: string,
    age: number,
    lessons: Array<LessonType>,
    adress: {
        street: {
            title:string,
        }
    }
}
let props:ManType;
beforeEach(() => {
    props = {
        name: "Dimych",
        age: 35,
        lessons: [{title:"1"}, {title:"2"}, {title:"3"}],
        adress: {
            street: {
                title:"Surganova 2",
            }
        }
    }
})
test('Object', ()=> {
        props = {
        name: "Dimych",
        age: 35,
        lessons: [{title:"1"}, {title:"2"}],
        adress: {
            street: {
                title:"Surganova 2",
            }
        }
    }

//     const age =props.age
//     const lessons =props.lessons
    const {age, lessons} = props;
    const {title} = props.adress.street

    expect(age).toBe(35)
    expect(lessons.length).toBe(2)

    expect(title).toBe("Surganova 2")
})
test('Array', ()=> {
const l1 = props.lessons[0]
const l2 = props.lessons[1]
    const [,ls2,...restLessons] = props.lessons
    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
    // expect(ls1.title).toBe("1")
    // expect(ls2.title).toBe("2") //пропустили
    expect(ls2.title).toBe("2")
    expect(restLessons[0].title).toBe("3")
})
