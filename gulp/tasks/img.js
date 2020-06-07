module.exports = function () {
	$.gulp.task('img:dev',function () {
		return $.gulp.src('src/static/img/*.{png,jpg,gif,jpeg}') //какие файлы будет брать
			.pipe($.gulp.dest('build/static/img/'));
	});

	$.gulp.task('img:build',function () {
		return $.gulp.src('src/static/img/*.{png,jpg,gif,jpeg}') //какие файлы будет брать
			.pipe($.gp.tinypng('GcKrnWn1mJl5yp9FCZZ82Lsvw8RsCh1n'))
			.pipe($.gulp.dest('build/static/img/'));
	});
};
