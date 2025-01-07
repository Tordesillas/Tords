export default interface Leaderboard {
    year: string;
    categories: {
        name: string;
        nominees: string[];
        winnerId: number;
    }[];
}