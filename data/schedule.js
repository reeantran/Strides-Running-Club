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
      { label: 'Low Mileage', distance: '~2 miles', front: 'Emily', back: 'Ellie' },
      { label: 'Middle Mileage', distance: '~4 miles', front: 'Alex', back: 'Anica' },
      { label: 'High Mileage', distance: '~6 miles', front: '', back: '' },
    ],
  },
  tuesday: {
    time: '4:00 PM',
    groups: [
      { label: 'Low Mileage', distance: '~2 miles', front: 'Mattie', back: 'Audrey' },
      { label: 'Middle Mileage', distance: '~4 miles', front: 'Ernesto', back: 'Jane' },
      { label: 'High Mileage', distance: '~6 miles', front: 'Terran', back: 'Ellie' },
    ],
  },
  wednesday: {
    time: '4:00 PM',
    groups: [
      { label: 'Low Mileage', distance: '~2 miles', front: 'Colm', back: 'Naomi' },
      { label: 'Middle Mileage', distance: '~4 miles', front: 'Gray', back: 'Samuel' },
      { label: 'High Mileage', distance: '~6 miles', front: 'Liam', back: 'Cintha' },
    ],
  },
  thursday: {
    time: '4:00 PM',
    groups: [
      { label: 'Low Mileage', distance: '~2 miles', front: '', back: 'Hannah' },
      { label: 'Middle Mileage', distance: '~4 miles', front: 'Noah', back: 'Magaly' },
      { label: 'High Mileage', distance: '~6 miles', front: 'Liam', back: 'Owen' },
    ],
  },
  friday: {
    time: '4:00 PM',
    groups: [
      { label: 'Low Mileage', distance: '~2 miles', front: 'Richard', back: 'Amara' },
      { label: 'Middle Mileage', distance: '~4 miles', front: 'Diego', back: 'Abby' },
      { label: 'High Mileage',distance: '~6 miles', front: 'Ryan', back: 'Sergio' },
    ],
  },
  saturday: {
    time: '9:00 AM',
    groups: [
      { label: 'Middle Mileage', distance: '~4 miles', front: 'Liam', back: 'Miguel' },
    ],
  },
};
