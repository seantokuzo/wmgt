export default abstract class CourseStats {
  static getCourseAveragesPerRound(season: number, round: number, coursePars: number[]): number[] {
    console.log('S' + season + 'R' + round)
    return [1, 2, 3, 4, 5, 4, 3, 2, 4, 1, 2, 3, 4, 5, 4, 3, 2, 4]
  }
}
