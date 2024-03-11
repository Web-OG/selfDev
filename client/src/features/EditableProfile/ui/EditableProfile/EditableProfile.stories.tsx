import type {Meta, StoryObj} from '@storybook/react';
import {EditableProfile} from './EditableProfile';
import {profileReducer} from 'features/EditableProfile/model/slice/profileSlice';
import {mockUserSlice} from 'shared/lib/mocks/slices';

const meta: Meta<typeof EditableProfile> = {
  title: 'features/EditableProfile/EditableProfile',
  component: EditableProfile,
  args: {},
};
export default meta;

type Story = StoryObj<typeof EditableProfile>;


export const ViewMode: Story = {
  args: {},
};

export const ViewModeDark: Story = {
  parameters: {
    theme: 'dark'
  },
};

export const EditMode: Story = {
  args: {},
  parameters: {
    state: {
      ...mockUserSlice,
      profile: {
        data: {_id: '123'},
        readonly: false,
        isSending: false,
      },
    },
    asyncReducers: {profile: profileReducer}
  }
};

export const EditModeDark: Story = {
  args: {},
  parameters: {
    ...EditMode.parameters,
    theme: 'dark'
  }
};

export const LoadingError: Story = {
  args: {},
  parameters: {
    state: {
      ...mockUserSlice,
      profile: {
        readonly: true,
        isSending: false,
        loadingError: {ru: 'Ошибка загрузки', en: 'Loading error'}
      },
    },
    asyncReducers: {profile: profileReducer}
  }
};

export const SendingError: Story = {
  args: {},
  parameters: {
    state: {
      ...mockUserSlice,
      profile: {
        readonly: true,
        isSending: false,
        sendingErrorMsg: {ru: 'Неверный запрос', en: 'Invalid request'},
        sendingErrorFields: {
          firstname: {
            ru: 'поле не должно быть пустым',
            en: 'the field should not be empty'
          }
        }
      },
    },
    asyncReducers: {profile: profileReducer}
  }
};
