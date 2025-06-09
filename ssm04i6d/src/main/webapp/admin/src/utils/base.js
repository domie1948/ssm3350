const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm04i6d/",
            name: "ssm04i6d",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm04i6d/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "计算机office课程平台"
        } 
    }
}
export default base
