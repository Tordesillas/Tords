import {ref, computed} from "vue";
import {defineStore} from "pinia";
import type {Leaderboard} from "@/models";

export const useLeaderboard = defineStore('leaderboards', () => {
    const leaderboards = ref<Leaderboard[]>([
        {
            year: '2024',
            categories: [
                {
                    name: 'Best song',
                    nominees: ['Deezl - CYBERGORE', 'D-Block & S-te-fan - Fire', 'Riot Shift - OUR DESTRUCTION', 'Vertile - Golden hour', 'Rebelion & Ecstatic - Retaliation', 'Sickmode, Rooler, Krowdexx - SAVE ME', 'Sefa, D-Block & S-te-fan - Symphony of life'],
                    winnerId: 3
                },
                {
                    name: 'Best artist',
                    nominees: ['D-Block & S-te-fan', 'Ecstatic', 'Krowdexx', 'Riot Shift', 'Sefa'],
                    winnerId: 4
                },
                {
                    name: 'Best set',
                    nominees: ['Sefa - EPK', 'Krowdexx - So W\'Happy', 'Inna - Nice', 'Ecstatic - Hard Boat', 'Galactixx - Hard Boat'],
                    winnerId: 1
                },
                {
                    name: 'Best game',
                    nominees: ['Dying Light', 'Control', 'Bokura', 'Neon White', 'SUPER CRAZY RHYTHM CASTLE'],
                    winnerId: 3
                }
            ]
        },
        {
            year: '2023',
            categories: [
                {
                    name: 'Best song',
                    nominees: ['Rebelion - Vendetta', 'Warface - Sky fall', 'Phuture Noize - One last midnight', 'Cryex - Cryexgenic', 'MaRLo - Roses & thorns'],
                    winnerId: 0
                },
                {
                    name: 'Best artist',
                    nominees: ['MaRLo', 'Phuture Noize', 'Riot Shift', 'S3RL', 'Warface'],
                    winnerId: 2
                },
                {
                    name: 'Best set',
                    nominees: ['Dr. Peacock - Rebirth', 'Phuture Noize - Rebirth', 'Radical Redemption - Rebirth', 'Riot Shift - Rebirth', 'Rebelion - EMF', 'Martin Garrix - Positiv'],
                    winnerId: 1
                },
                {
                    name: 'Best game',
                    nominees: ['Powerwash Simulator', 'My Time at Portia', 'A Plague Tale: Requiem', 'Borderlands 3', 'Ghostrunner'],
                    winnerId: 2
                }
            ]
        },
        {
            year: '2022',
            categories: [
                {
                    name: 'Best song',
                    nominees: ['D-Block & S-te-fan - Enter your mind', 'Sefa x D-Block & S-te-fan - Infinity', 'Sickmode, Rooler - CLUB BANGER', 'Warface, Vertile - Relentless', 'Headhunterz, Vertile - Before I wake', 'Warface, Cryex - Fighting for'],
                    winnerId: 1
                },
                {
                    name: 'Best artist',
                    nominees: ['Blasterjaxx', 'Rebelion', 'Sefa', 'Sub Zero Project', 'Vertile'],
                    winnerId: 4
                },
                {
                    name: 'Best set',
                    nominees: ['Sub Zero Project - TMLW', 'Armin van Buuren - TMLW', 'Vertile - Defqon.1 Blue', 'Sub Zero Project - Defqon.1 Red', 'Ghost Stories (D-Block & S-te-fan) - Defqon.1 Red', 'Sefa - EMF'],
                    winnerId: 5
                },
                {
                    name: 'Best game',
                    nominees: ['NieR:Automata', 'Ori and the Will of the Wisps', 'Yakuza Like a dragon', 'Guardians of the Galaxy', 'Chorus', 'Vermintide 2'],
                    winnerId: 0
                }
            ]
        },
        {
            year: '2021',
            categories: [
                {
                    name: 'Best song',
                    nominees: ['Phuture Noize - Anthem of freedom', 'Sefa - In de hemel', 'Gabry Ponte - Thunder', 'Angerfist - What happened', 'W&W & Blasterjaxx - Dynamite'],
                    winnerId: 0
                },
                {
                    name: 'Best artist',
                    nominees: ['Da Tweekaz', 'Dr. Peacock', 'Mark with a K', 'Ran-D', 'W&W'],
                    winnerId: 4
                },
                {
                    name: 'Best game',
                    nominees: ['Doom Eternal', 'Shadow of the Tomb Raider', 'Wolfenstein', 'Ori and the Blind Forest', 'Prey', 'Metro Exodus', 'Outriders'],
                    winnerId: 5
                }
            ]
        },
        {
            year: '2020 - 2011',
            categories: [
                {
                    name: 'Best song in 2020',
                    nominees: ['Ran-D - Living for the moment (2020 remix)'],
                    winnerId: 0
                },
                {
                    name: 'Best song in 2019',
                    nominees: ['Martin Garrix feat. Bonn - High on life'],
                    winnerId: 0
                },
                {
                    name: 'Best song in 2018',
                    nominees: ['Ran-D - Zombie'],
                    winnerId: 0
                },
                {
                    name: 'Best song in 2017',
                    nominees: ['Alan Walker - Alone'],
                    winnerId: 0
                },
                {
                    name: 'Best song in 2016',
                    nominees: ['Elliot Berger feat. Laura Brehm - Diamond sky (Skrux remix)'],
                    winnerId: 0
                },
                {
                    name: 'Best song in 2015',
                    nominees: ['Martin Garrix feat. Usher - Don\'t look down'],
                    winnerId: 0
                },
                {
                    name: 'Best song in 2014',
                    nominees: ['Krewella - Say goodbye'],
                    winnerId: 0
                },
                {
                    name: 'Best song in 2013',
                    nominees: ['Avicii vs. Skrillex - Levels'],
                    winnerId: 0
                },
                {
                    name: 'Best song in 2012',
                    nominees: ['Sebastian Ingrosso & Alesso - Calling'],
                    winnerId: 0
                },
                {
                    name: 'Best song in 2011',
                    nominees: ['David Guetta feat. Akon - Sexy bitch'],
                    winnerId: 0
                }
            ]
        }
    ]);

    const selectedYear = ref<string>(leaderboards.value[0]!.year);
    function changeSelectedYear(newYear: string) {
        selectedYear.value = newYear;
    }

    const selectedLeaderboard = computed(
        () => leaderboards.value.find(({year}) => year === selectedYear.value)!.categories
    );

    const leaderboardYears = computed(() => leaderboards.value.map(({year}) => year));

    return {
        selectedYear,
        changeSelectedYear,
        selectedLeaderboard,
        leaderboardYears
    };
});