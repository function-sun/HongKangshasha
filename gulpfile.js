var gulp = require("gulp");
var sass = require("gulp-sass");

//复制
gulp.task("copyindex",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\HongKangshasha"));
});

//图片
gulp.task("images",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\HongKangshasha\\img"));
});

//sass
gulp.task("sass",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\HongKangshasha\\css"));
});

//监听
gulp.task("watchall",function(){
	gulp.watch("*.html",["copyindex"]);
	gulp.watch("scss/*.scss",["sass"]);
	gulp.watch("img/**/*.{jpg,png}",["images"]);
});
