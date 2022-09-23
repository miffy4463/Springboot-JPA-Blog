<%--
  Created by IntelliJ IDEA.
  User: 김정민
  Date: 2022-09-23
  Time: 오전 11:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="../layout/header.jsp" %>

    <div class="container">️
        <form action="/user/join" method="post">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" class="form-control" placeholder="Enter username" id="username">
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" class="form-control" placeholder="Enter password" id="password">
            </div>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" placeholder="Enter email" id="email">
            </div>
        </form>
        <button id="btn-save" class="btn btn-primary">회원가입완료</button>
    </div>

<script src="/js/user.js"></script>
<%@ include file="../layout/footer.jsp" %>
