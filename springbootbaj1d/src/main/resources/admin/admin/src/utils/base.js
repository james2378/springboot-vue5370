const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootbaj1d/",
            name: "springbootbaj1d",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "大学生创新创业训练项目管理系统设计与实现"
        } 
    }
}
export default base
