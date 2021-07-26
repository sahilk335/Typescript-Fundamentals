const statuses = {
    nonStarted: 0,
    inProgress: 1,
    done: 2,
}

//without Enums
console.log(statuses.inProgress);



//With Enums

enum StatusEnum {
    NOT_STARTED,
    IN_PROGRESS,
    DONE
}

console.log(StatusEnum.IN_PROGRESS);


//We can assign values to Enums

enum NEWStatus {
    NOT_STARTED = "new Started",
    IN_PROGRESS = "in progress",
    DONE = "done"
}


interface Task {
    id: string,
    status: StatusEnum,
}