package cos.cos.blog.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // 스프링이 com.cos.blog 패키지 이하 스캔하여, 특정 어노테이션 붙어있는 클래스 파일들을 new 하여 스프링컨테이너에 관리해 준다.
public class BlogControllerTest {
    @GetMapping("/test/hello")
    public String hello() {
        return "<h1>hello springboot</h1>";
    }
}
