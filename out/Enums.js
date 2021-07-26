var statuses = {
    nonStarted: 0,
    inProgress: 1,
    done: 2
};
//without Enums
console.log(statuses.inProgress);
//With Enums
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["NOT_STARTED"] = 0] = "NOT_STARTED";
    StatusEnum[StatusEnum["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    StatusEnum[StatusEnum["DONE"] = 2] = "DONE";
})(StatusEnum || (StatusEnum = {}));
console.log(StatusEnum.IN_PROGRESS);
//We can assign values to Enums
var NEWStatus;
(function (NEWStatus) {
    NEWStatus["NOT_STARTED"] = "new Started";
    NEWStatus["IN_PROGRESS"] = "in progress";
    NEWStatus["DONE"] = "done";
})(NEWStatus || (NEWStatus = {}));
