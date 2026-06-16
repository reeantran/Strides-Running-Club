/**
 * Weekly officer schedule.
 *
 * To update assignments:
 *  - Change the `front` / `back` names to match first names in data/officers.js
 *  - Names must match exactly (case-sensitive) so the photo lookup works
 *
 * `back: null` is valid if a slot is unassigned.
 */
export const schedule = {
  monday: {
    time: '4:00 PM',
    groups: [
      { label: 'Low Mileage',    distance: '~2 miles', front: 'Jessica', back: 'Sam'      },
      { label: 'Middle Mileage', distance: '~4 miles', front: 'Diego',   back: 'Anica'    },
      { label: 'High Mileage',   distance: '~6 miles', front: 'Ryan',    back: 'Jonathan' },
    ],
  },
  tuesday: {
    time: '4:00 PM',
    groups: [
      { label: 'Low Mileage',    distance: '~2 miles', front: 'Liam',  back: 'Richard' },
      { label: 'Middle Mileage', distance: '~4 miles', front: 'Colm',  back: 'Elaina'  },
      { label: 'High Mileage',   distance: '~6 miles', front: 'Alex',  back: 'Owen'    },
    ],
  },
  wednesday: {
    time: '4:00 PM',
    groups: [
      { label: 'Low Mileage',    distance: '~2 miles', front: 'Mattie',   back: 'Naomi'    },
      { label: 'Middle Mileage', distance: '~4 miles', front: 'Gray',     back: 'Anica'    },
      { label: 'High Mileage',   distance: '~6 miles', front: 'Dean',     back: 'Jacintha' },
    ],
  },
  thursday: {
    time: '4:00 PM',
    groups: [
      { label: 'Low Mileage',    distance: '~2 miles', front: 'Emily',   back: 'Ellie'   },
      { label: 'Middle Mileage', distance: '~4 miles', front: 'Ernesto', back: 'Jane'    },
      { label: 'High Mileage',   distance: '~6 miles', front: 'Magaly',  back: 'Phillip' },
    ],
  },
  friday: {
    time: '4:00 PM',
    groups: [
      { label: 'Low Mileage',    distance: '~2 miles', front: 'Abby',   back: 'Miguel' },
      { label: 'Middle Mileage', distance: '~4 miles', front: 'Aileen', back: 'Noah'   },
      { label: 'High Mileage',   distance: '~6 miles', front: 'Ben',    back: 'Sergio' },
    ],
  },
  saturday: {
    time: '9:00 AM',
    groups: [
      { label: 'Low Mileage',    distance: '~2 miles', front: 'Joachim', back: 'Hannah'  },
      { label: 'Middle Mileage', distance: '~4 miles', front: 'Roxanna', back: 'Amara'   },
      { label: 'High Mileage',   distance: '~6 miles', front: 'Dean',    back: 'Phillip' },
    ],
  },
};
