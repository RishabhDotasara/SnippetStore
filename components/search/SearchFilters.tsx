import { Dispatch, SetStateAction } from 'react';
import { Badge } from '../ui/Badge';
import { FilterRecord } from '../search-page/Search';

const languages = ['JavaScript', 'TypeScript', 'Python', 'CSS', 'HTML', 'Java', 'C++', 'Ruby'];
const types = ['Snippet', 'Block'];
const sortOptions = ['Most Recent', 'Most Popular', 'Most Viewed'];

type FilterProps = {
  filters:FilterRecord | undefined;
  setFilters:Dispatch<SetStateAction<FilterRecord | undefined>>;
}

export const SearchFilters = ({filters, setFilters}:FilterProps) => {

  const updateLanguages = async (lang:string)=>{
    //check if the language is already there or not
    //if it is there then remove it
    //else add it
    if (filters?.languages.includes(lang))
    {
      setFilters((prev:any)=>{
        return {...prev, languages:prev?.languages?.filter((l:string)=>l!==lang) || []}
      })
    }
    else 
    {
      setFilters((prev:FilterRecord | undefined)=>{
        if (!prev) return { languages: [lang], type: [], sortBy: '' };
        return {...prev, languages:[...(prev?.languages || []), lang]}
      })
    }
  }

  const updateTypes = async (type:string)=>{
    if (filters?.type.includes(type))
    {
      setFilters((prev:any)=>{
        return {...prev, type:prev?.type?.filter((t:string)=>t!==type) || []}
      })
    }
    else 
    {
      setFilters((prev:FilterRecord | undefined)=>{
        if (!prev) return { languages: [], type: [type], sortBy: ''};
        return {...prev, type:[...(prev?.type || []), type]}
      })
    } 
  }

  const updateSortBy = (value:string)=>{
    console.log(value)
  }


  return (
    <div className="w-64 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm h-fit">
      <div className="space-y-6">
        {/* Type Filter */}
        
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Type</h3>
          <div className="space-y-2">
            {types.map(type => (
              <label key={type} className="flex items-center">
                <input type="checkbox" className="form-checkbox text-primary-500" onChange={()=>updateTypes(type)}/>
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Language Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Language</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map(lang => (
              <Badge
                key={lang}
                variant={filters?.languages.includes(lang) ? 'primary' : 'secondary' }
                
                onClick={()=>updateLanguages(lang)}
              >
                {lang}
              </Badge>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Sort By</h3>
          <select className="w-full p-2 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300" onChange={(e)=>{updateSortBy(e.target.value)}}>
            {sortOptions.map(option => (
              <option key={option} value={option.toLowerCase().replace(' ', '_')}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};