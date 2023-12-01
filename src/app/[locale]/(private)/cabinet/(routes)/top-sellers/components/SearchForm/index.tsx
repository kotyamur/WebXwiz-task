'use client';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { SeachForm } from 'components/common/forms/SeacrhForm';

// import s from './SearchForm.module.scss';

export interface IForm {
  search: string;
  date_from?: string;
  date_to?: string;
}

export const SearchForm = () => {
    const t = useTranslations('ProfilePage.TopSellers.Form');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const search = {
    label: t('search_label'),
    placeholder: t('search_placeholder'),
    name: 'seller',
  };

  const fields = {
    label: t('date_label'),
    items: [
      {
        name: 'date_from',
        placeholder: t('date_from'),
      },
      { name: 'date_to', placeholder: t('date_to') },
    ],
    };
    
    const onSearch = (formData: any) => { console.log(formData); }

    return (
    //   <div className={s.wrapper}>
        <SeachForm
          fields={fields}
          search={search}
          onSearch={onSearch}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          withoutFilter={true}
        />
    //   </div>
    );
};
