let index = {
    init: function () {
        $("#btn-save").on("click", ()=> { // function 사용하지 않는 이유는 this 바인딩 하기 위해
            this.save();
        });
    },

    save: function () {
        let data = {
            username: $("#username").val(),
            password: $("#password").val(),
            email: $("#email").val()
        };
        //console.log(data);
        // ajax 호출 시, default 가 비동기 호출
        $.ajax({
            type: "post",
            url: "/auth/joinProc",
            data: JSON.stringify(data), //http body
            contentType: "application/json; charset=utf-8", //body data type
            dataType: "json" //응답의 data type (응답이 왔을 때 기본적으로 모든 것이 문자열 (생긴게 json 이면 javascript object 로 변경)
        }).done(function(resp) {
            alert("회원가입이 완료 되었습니다.");
            //console.log(resp);
            location.href = "/";
        }).fail(function(error) {
            alert(JSON.stringify(error));
        }); // ajax 통신을 이용하여, 3개의 데이터를 json 으로 변경하여 insert 요청
    }
}

index.init();